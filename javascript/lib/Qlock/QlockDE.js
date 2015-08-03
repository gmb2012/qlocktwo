// German Qlock layout and properties
class QlockDE {
    constructor() {
        this.layout = [
            //     0    1    2    3    4    5    6    7    8    9    10
            // 0
            [ 'E', 'S', 'M', 'I', 'S', 'T', 'E', 'F', 'Ü', 'N', 'F' ],
            // 1
            [ 'Z', 'E', 'H', 'N', 'Z', 'W', 'A', 'N', 'Z', 'I', 'G' ],
            // 2
            [ 'N', 'A', 'C', 'H', 'V', 'I', 'E', 'R', 'T', 'E', 'L' ],
            // 3
            [ 'V', 'O', 'R', 'N', 'A', 'C', 'H', 'H', 'A', 'L', 'B' ],
            // 4
            [ 'E', 'I', 'N', 'S', 'I', 'N', 'K', 'Z', 'W', 'E', 'I' ],
            // 5
            [ 'D', 'R', 'E', 'I', 'E', 'A', 'N', 'V', 'I', 'E', 'R' ],
            // 6
            [ 'F', 'Ü', 'N', 'F', 'N', 'I', 'S', 'E', 'C', 'H', 'S' ],
            // 7
            [ 'S', 'I', 'E', 'B', 'E', 'N', 'I', 'A', 'C', 'H', 'T' ],
            // 8
            [ 'N', 'E', 'U', 'N', 'Z', 'E', 'H', 'N', 'E', 'L', 'F' ],
            // 9
            [ 'Z', 'W', 'Ö', 'L', 'F', 'K', 'A', 'B', 'U', 'H', 'R' ]
        ];

        // allways on
        this.staticMap = [ [ 0, 0 ], [ 0, 1 ], [ 0, 3 ], [ 0, 4 ], [ 0, 5 ] ];

        // minutes
        // helper map for words
        let minuteWordMap = {
            five: [ [ 0, 7 ], [ 0, 8 ], [ 0, 9 ], [ 0, 10 ] ],
            ten: [ [ 1, 0 ], [ 1, 1 ], [ 1, 2 ], [ 1, 3 ] ],
            twenty: [ [ 1, 4 ], [ 1, 5 ], [ 1, 6 ], [ 1, 7 ], [ 1, 8 ], [ 1, 9 ], [ 1, 10 ] ],
            quarter: [ [ 2, 4 ], [ 2, 5 ], [ 2, 6 ], [ 2, 7 ], [ 2, 8 ], [ 2, 9 ], [ 2, 10 ] ],
            half: [ [ 3, 7 ], [ 3, 8 ], [ 3, 9 ], [ 3, 10 ] ],
            after: [ [ 2, 0 ], [ 2, 1 ], [ 2, 2 ], [ 2, 3 ] ],
            before: [ [ 3, 0 ], [ 3, 1 ], [ 3, 2 ] ],
            afterQuarter: [ [ 3, 3 ], [ 3, 4 ], [ 3, 5 ], [ 3, 6 ] ]
        };

        this.minutesMap = [
            {
                bounds: { low: 5, high: 9 },
                active: minuteWordMap.five.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 10, high: 14 },
                active: minuteWordMap.ten.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 15, high: 19 },
                active: minuteWordMap.quarter.concat(minuteWordMap.afterQuarter)
            },
            {
                bounds: { low: 20, high: 24 },
                active: minuteWordMap.twenty.concat(minuteWordMap.after)
            },
            {
                bounds: { low: 25, high: 29 },
                active: minuteWordMap.five.concat(minuteWordMap.before, minuteWordMap.half)
            },
            {
                bounds: { low: 30, high: 34 },
                active: minuteWordMap.half
            },
            {
                bounds: { low: 35, high: 39 },
                active: minuteWordMap.five.concat(minuteWordMap.after, minuteWordMap.half)
            },
            {
                bounds: { low: 40, high: 44 },
                active: minuteWordMap.twenty.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 45, high: 49 },
                active: minuteWordMap.quarter.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 50, high: 54 },
                active: minuteWordMap.ten.concat(minuteWordMap.before)
            },
            {
                bounds: { low: 55, high: 59 },
                active: minuteWordMap.five.concat(minuteWordMap.before)
            }
        ];

        // hour
        this.hourMap = {
            0: [ [ 9, 0 ], [ 9, 1 ], [ 9, 2 ], [ 9, 3 ], [ 9, 4 ] ],
            1: [ [ 4, 0 ], [ 4, 1 ], [ 4, 2 ], [ 4, 3 ] ],
            2: [ [ 4, 7 ], [ 4, 8 ], [ 4, 9 ], [ 4, 10 ] ],
            3: [ [ 5, 0 ], [ 5, 1 ], [ 5, 2 ], [ 5, 3 ] ],
            4: [ [ 5, 7 ], [ 5, 8 ], [ 5, 9 ], [ 5, 10 ] ],
            5: [ [ 6, 0 ], [ 6, 1 ], [ 6, 2 ], [ 6, 3 ] ],
            6: [ [ 6, 6 ], [ 6, 7 ], [ 6, 8 ], [ 6, 9 ], [ 6, 10 ] ],
            7: [ [ 7, 0 ], [ 7, 1 ], [ 7, 2 ], [ 7, 3 ], [ 7, 4 ], [ 7, 5 ] ],
            8: [ [ 7, 7 ], [ 7, 8 ], [ 7, 9 ], [ 7, 10 ] ],
            9: [ [ 8, 0 ], [ 8, 1 ], [ 8, 2 ], [ 8, 3 ] ],
            10: [ [ 8, 4 ], [ 8, 5 ], [ 8, 6 ], [ 8, 7 ] ],
            11: [ [ 8, 8 ], [ 8, 9 ], [ 8, 10 ] ]
        };

        // when to increment hour by one
        this.swapHour = 25;

        // clock word
        this.clockWordMap = [ [ 9, 8 ], [ 9, 9 ], [ 9, 10 ] ];
    }
}

export default QlockDE;
