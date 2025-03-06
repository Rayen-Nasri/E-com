import { memo } from "react";
import { NavBarSee } from "./navBar.See";
import { Content } from "./content";
export const SeeMore = memo(()=>{
    return <>
        <NavBarSee/>
        <Content/>
    </>
})