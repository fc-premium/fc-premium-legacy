export class UserStats {
	public messageCount: number = null;
	public signupDate: Date = null;
	public lastActivity: Date = null;

	public get messagesPerDay(): number {
		if (this.messageCount === null || this.signupDate === null)
			return null;

		const msSinceSignUp = Date.now() - this.signupDate.getTime();

		return this.messageCount / (msSinceSignUp / 1000 / 60 / 60 / 24);
	}
}
