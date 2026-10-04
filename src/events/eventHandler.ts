import type { GameEventData, LevelEventData } from "./event.type";
import { v4 as uuidV4 } from "uuid";


export class Analytics {
    private readonly url = 'http://localhost:3000/event'
    private userId;
    constructor() {
        this.userId = uuidV4()
    }

    send(id: string, data: LevelEventData | GameEventData) {
        fetch(this.url, {
            method: 'POST',
            headers: {
                "Content-Type": "application/json"
            },
            body: JSON.stringify({
                eventId: id,
                userId: this.userId,
                data
            })
        })
    }
}