import {TypedUseSelectorHook, useSelector} from "react-redux";
import {RootState} from "../redux/redusers/root-reducer";


export const useTypeSelector: TypedUseSelectorHook<RootState> = useSelector