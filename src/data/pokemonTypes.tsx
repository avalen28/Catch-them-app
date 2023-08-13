import { pokemonTypeInterface } from "../interfaces/pokemonTypeInterface"
import {
    faBug,
    faMoon,
    faLeaf,
    faSkullCrossbones
} from "@fortawesome/free-solid-svg-icons";
export const pokemonType: pokemonTypeInterface[] = [
    {
        type: "bug",
        color: "bg-green-700",
        img: faBug
    },
    {
        type: "dark",
        color: "bg-zinc-900",
        img: "faMoon"
    },
    {
        type: "dragon",
        color: "bg-teal-600",
        img: "faDragon"
    },
    {
        type: "electric",
        color: "bg-yellow-300",
        img: "faBolt"
    },
    {
        type: "fairy",
        color: "bg-pink-700",
        img: "faHandSparkles"
    },
    {
        type: "fighting",
        color: "bg-orange-700",
        img: "faHandFist"
    },
    {
        type: "fire",
        color: "bg-red-600",
        img: "faFire"
    },
    {
        type: "flying",
        color: "bg-slate-600",
        img: "faDove"
    },
    {
        type: "ghost",
        color: "bg-indigo-800",
        img: "faGhost"
    },
    {
        type: "grass",
        color: "bg-green-600",
        img: faLeaf
    },
    {
        type: "ground",
        color: "bg-amber-700",
        img: "faMountainSun"
    },
    {
        type: "ice",
        color: "bg-cyan-500",
        img: "faSnowFlake"
    },
    {
        type: "normal",
        color: "bg-rose-300",
        img: "faCircleXmark"
    },
    {
        type: "poison",
        color: "bg-purple-700",
        img: faSkullCrossbones
    },
    {
        type: "psychic",
        color: "bg-fuchsia-500",
        img: "faHatWizard"
    },
    {
        type: "rock",
        color: "bg-orange-950",
        img: "faDumbbell"
    },
    {
        type: "steel",
        color: "bg-teal-800",
        img: "faAtom"
    },
    {
        type: "water",
        color: "bg-blue-700",
        img: "faDroplet"
    }
]