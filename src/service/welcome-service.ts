class WelcomeService {
    getMessage(): string {
        return "Welcome to the homepage";
    }
}

const welcomeService: WelcomeService = new WelcomeService();
export { welcomeService };