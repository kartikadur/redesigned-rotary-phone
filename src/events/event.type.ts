export type LevelEventData = {
    durationMs: number,
    level: number,
    occurredAt: number,
    progress: number,
    reason: 'fail' | 'complete' | 'quit',
    score: number
}

export type GameEventData = {
    reason: 'fail' | 'complete' | 'quit',
    score: number,
    bestScore: number,
    level: number,
    bestLevel: number,
    occurredAt: number,
}