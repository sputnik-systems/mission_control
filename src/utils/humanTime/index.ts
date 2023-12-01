export class Duration {
    private validationRegex = /\d+[dhms]/

    str = ""
    num = 0

    constructor(duration: string) {
        if (!this.validationRegex.test(duration)) throw new Error("invalid format")
        this.str = duration
        this.num = this.parseStringDuration(duration)
    }

    parseStringDuration = (duration: string): number =>{
        const num = duration.match(/(\d+)/)?.[0] || "0"
        const unit = duration.match(/(\D+)/)?.[0] || "s"
        switch (unit) {
            case "d":
                return parseInt(num) * 24 * 60 * 60 * 1000
            case "h":
                return parseInt(num) * 60 * 60 * 1000
            case "m":
                return parseInt(num) * 60 * 1000
            case "s":
                return parseInt(num) * 1000
        }

        return 0
    }

    subtractFromNow = (): Date => {
        return new Date(Date.now() - this.num)
    }
}