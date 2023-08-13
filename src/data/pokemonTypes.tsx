import { pokemonTypeInterface } from "../interfaces/pokemonTypeInterface"
import {
    faBug,
    faMoon,
    faLeaf,
    faSkullCrossbones,
    faDragon,
    faBolt,
    faHandSparkles,
    faHandFist,
    faFire,
    faDove,
    faGhost,
    faMountain,
    faSnowflake,
    faCircleXmark,
    faHatWizard,
    faDumbbell,
    faAtom,
    faDroplet

} from "@fortawesome/free-solid-svg-icons";
export const pokemonType: pokemonTypeInterface[] = [
    {
        type: "bug",
        color: "bg-green-700",
        secondaryColor: "bg-green-500",
        img: faBug
    },
    {
        type: "dark",
        color: "bg-zinc-900",
        secondaryColor: "bg-zinc-700",
        img: faMoon
    },
    {
        type: "dragon",
        color: "bg-teal-600",
        secondaryColor: "bg-teal-400",
        img: faDragon
    },
    {
        type: "electric",
        color: "bg-yellow-300",
        secondaryColor: "bg-yellow-100",
        img: faBolt
    },
    {
        type: "fairy",
        color: "bg-pink-700",
        secondaryColor: "bg-pink-500",
        img: faHandSparkles
    },
    {
        type: "fighting",
        color: "bg-orange-700",
        secondaryColor: "bg-orange-500",
        img: faHandFist
    },
    {
        type: "fire",
        color: "bg-red-600",
        secondaryColor: "bg-red-400",
        img: faFire
    },
    {
        type: "flying",
        color: "bg-slate-600",
        secondaryColor: "bg-slate-400",
        img: faDove
    },
    {
        type: "ghost",
        color: "bg-indigo-800",
        secondaryColor: "bg-indigo-600",
        img: faGhost
    },
    {
        type: "grass",
        color: "bg-green-500",
        secondaryColor: "bg-green-300",
        img: faLeaf
    },
    {
        type: "ground",
        color: "bg-amber-700",
        secondaryColor: "bg-amber-500",
        img: faMountain
    },
    {
        type: "ice",
        color: "bg-cyan-500",
        secondaryColor: "bg-cyan-300",
        img: faSnowflake
    },
    {
        type: "normal",
        color: "bg-rose-300",
        secondaryColor: "bg-rose-100",
        img: faCircleXmark
    },
    {
        type: "poison",
        color: "bg-purple-500",
        secondaryColor: "bg-purple-300",
        img: faSkullCrossbones
    },
    {
        type: "psychic",
        color: "bg-fuchsia-500",
        secondaryColor: "bg-fuchsia-300",
        img: faHatWizard
    },
    {
        type: "rock",
        color: "bg-orange-950",
        secondaryColor: "bg-orange-700",
        img: faDumbbell
    },
    {
        type: "steel",
        color: "bg-teal-800",
        secondaryColor: "bg-teal-600",
        img: faAtom
    },
    {
        type: "water",
        color: "bg-blue-700",
        secondaryColor: "bg-blue-500",
        img: faDroplet
    }
]