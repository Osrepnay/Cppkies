import gameType, { FoolBuilding, Cppkies, AddEvent } from "./gameType"
import master from "./vars"
import Game from "./gameType"
import { injectCode } from "./helpers"
import { Injection } from "./injects/generic"
declare let Game: gameType
declare let Cppkies: Cppkies
declare const l: (id: string) => HTMLElement
declare const AddEvent: AddEvent
declare const PlaySound: (url: string, volume?: number, pitch?: number) => void
interface Art {
	base: string
	xV: number
	yV: number
	w: number
	rows: number
	x: number
	y: number
	pic: string
	bg: string
}
export function createHooks(building: Building | Game["Object"]): void {
	const injections: Injection[] = [
		new Injection("tooltip", [], () => {
			building.tooltip = injectCode(
				injectCode(building.tooltip, "return", "let ret = ", "replace"),
				null,
				`\n//Cppkies injection
		for(const i in Cppkies.buildingHooks["${building.name}"].tooltip) {
			const tempRet = Cppkies.buildingHooks["${building.name}"].tooltip[i].call(this, ret)
			ret = tempRet || ret
		}
		return ret`,
				"after"
			)
		}),
	]
	const dummy: Record<string, Function[]> = {}
	injections.forEach(inject => {
		dummy[inject.value] = inject.defValue
		if (inject.func) inject.func()
	})
	master.buildingHooks[building.name] = dummy
}

export class Building extends Game.Object {
	constructor(
		name: string,
		commonName: string,
		desc: string,
		icon: [number, number],
		art: Art,
		cpsFunc: (me: Building) => number,
		buyFunction: () => void,
		foolObject: FoolBuilding,
		buildingSpecial: [string, string]
	) {
		super(
			name,
			commonName,
			desc,
			icon[0],
			icon[1],
			art,
			0, //Game automatically calculates Price and BaseCps
			cpsFunc,
			buyFunction
		)
		createHooks(this)
		//Manually relink canvases and contexts because Orteil made it so new buildings break the old canvas and context links
		for (const i in Game.ObjectsById) {
			if (parseInt(i) > 0) {
				const me = Game.ObjectsById[i]
				me.canvas = l(`rowCanvas${i}`)
				me.ctx = me.canvas.getContext("2d")
				//Relink their events too
				AddEvent(me.canvas, "mouseover", () => {
					me.mouseOn = true
				})
				AddEvent(me.canvas, "mouseout", () => {
					me.mouseOn = false
				})
				AddEvent(me.canvas, "mousemove", e => {
					const box = me.canvas.getBoundingClientRect()
					me.mousePos[0] = e.pageX - box.left
					me.mousePos[1] = e.pageY - box.top
				})
			}
		}
		const localBuildingLink = Cppkies.buildingLink + "",
			localIconLink = Cppkies.iconLink + ""
		// This is the name, description, and icon used during Business Season
		if (foolObject) Game.foolObjects[name] = foolObject
		// The name of this building's golden cookie buff and debuff
		if (buildingSpecial) Game.goldenCookieBuildingBuffs[name] = buildingSpecial

		//CCSE.ReplaceBuilding(name)

		if (localIconLink) {
			master.buildingHooks[this.name].tooltip.push(ret =>
				this.locked
					? ret
					: ret.replace(
							"background-position",
							`background-image:url(${localIconLink});background-position`
					  )
			)
		}

		/*if (CCSE.save.Buildings[name]) {
			var saved = CCSE.save.Buildings[name]
			me.amount = saved.amount
			me.bought = saved.bought
			me.totalCookies = saved.totalCookies
			me.level = saved.level
			me.muted = saved.muted
			me.free = saved.free ? saved.free : 0 // Left this out earlier, can't expect it to be there
			me.minigameSave = saved.minigameSave

			Game.BuildingsOwned += me.amount
		} else {
			var saved = {}
			saved.amount = 0
			saved.bought = 0
			saved.totalCookies = 0
			saved.level = 0
			saved.muted = 0
			saved.minigameSave = ""

			CCSE.save.Buildings[name] = saved
		}*/

		Game.BuildStore()
		if (localBuildingLink) {
			master.hooks.postBuildStore.push(() => {
				l(
					`productIcon${this.id}`
				).style.backgroundImage = `url(${localBuildingLink})`
				l(
					`productIconOff${this.id}`
				).style.backgroundImage = `url(${localBuildingLink})`
			})
		}
		Game.BuildStore()
		this.canvas = l(`rowCanvas${this.id}`)
		this.ctx = this.canvas.getContext("2d")
		this.context = this.ctx
		this.pics = []
		const muteDiv = document.createElement("div")
		muteDiv.className = "tinyProductIcon"
		muteDiv.id = `mutedProduct${this.id}`
		muteDiv.style.display = "none"
		if (localBuildingLink)
			muteDiv.style.backgroundImage = `url(${localBuildingLink})`
		muteDiv.style.backgroundPositionX = `-${icon[0]}px`
		muteDiv.style.backgroundPositionY = `-${icon[1]}px`
		muteDiv.addEventListener("click", () => {
			this.mute(0)
			PlaySound(this.muted ? "snd/clickOff.mp3" : "snd/clickOn.mp3")
		})

		AddEvent(this.canvas, "mouseover", () => {
			this.mouseOn = true
		})
		AddEvent(this.canvas, "mouseout", () => {
			this.mouseOn = false
		})
		AddEvent(this.canvas, "mousemove", e => {
			const box = this.canvas.getBoundingClientRect()
			this.mousePos[0] = e.pageX - box.left
			this.mousePos[1] = e.pageY - box.top
		})
		l("buildingsMute").appendChild(muteDiv)
		Game.recalculateGains = 1
	}
}
export const defaultCps = (me: Building): number =>
	Game.GetTieredCpsMult(me) * Game.magicCpS(me.name) * me.baseCps
export const defaultOnBuy = function(): void {
	Game.UnlockTiered(this)
	if (
		this.amount >= Game.SpecialGrandmaUnlock &&
		Game.Objects["Grandma"].amount > 0 &&
		this.grandma
	)
		Game.Unlock(this.grandma.name)
}