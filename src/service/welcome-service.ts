class WelcomeService {
    getMessage(): string {
        return "Welcome to the homepage";
    }
}

const instance: WelcomeService = new WelcomeService();
export { instance as welcomeService };