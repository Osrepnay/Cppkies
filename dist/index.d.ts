import gameType, { Cppkies as CppkiesType } from "./gameType";
declare global {
    interface Window {
        Game: gameType;
        Cppkies: CppkiesType;
    }
}
declare let CppkiesExport: CppkiesType;
export default CppkiesExport;
