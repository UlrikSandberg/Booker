import { Cust2 } from "./Cust2";
import { CinemaHall } from "../entities/cinemaHall";

export type Cust1 = {
    id: string
	name: string
	age: number
	isVip: boolean
	something: number
	customers: Cust2[]
	cinemaHall: CinemaHall
	somearray: string[]
}