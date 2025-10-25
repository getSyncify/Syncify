import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const Waitlist = () => {
  return (
    <section id="waitlist" className="py-24 px-4 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl font-bold mb-4 text-foreground">Join the Waitlist</h2>
        <p className="text-xl text-muted-foreground mb-8">
          Be the first to get access to v1.0 and receive the source code.
          Sign up now and we'll notify you when we launch.
        </p>

        {/* LaunchList form (auto-handled externally) */}
        <div className="bg-card border border-border rounded-lg p-8 max-w-2xl mx-auto">
          <form
            className="launchlist-form flex flex-col sm:flex-row items-center gap-4"
            action="https://getlaunchlist.com/s/ZR4B1J"
            method="POST"
          >
            <Input
              type="email"
              name="email"
              placeholder="Enter your email"
              required
              className="flex-1 h-12 text-base"
            />
            <Button
              type="submit"
              className="bg-foreground text-background hover:bg-foreground/90 h-12 px-8"
            >
              Join Waitlist
            </Button>
          </form>
        </div>

        <p className="text-sm text-muted-foreground mt-6">
          By joining the waitlist, you'll get exclusive early access to v1.0 and the source code.
        </p>
      </div>
    </section>
  );
};
