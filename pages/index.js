import { Code, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/button";

import { useAuth } from "@/lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <main>
      <Heading>Fast Feedback</Heading>
      {auth.user ? (
        <>
          <Text>
            Current user:{" "}
            <Code>
              {auth?.user?.name} - {auth?.user?.email}
            </Code>
          </Text>
          <Button onClick={() => auth.signout()}>Sign Out</Button>
        </>
      ) : (
        <>
          <Text>You are not logged</Text>
          <Button onClick={() => auth.signinWithGitHub()}>
            Sign In GitHub
          </Button>
          <Button onClick={() => auth.signinWithGoogle()}>
            Sign In Google
          </Button>
        </>
      )}
    </main>
  );
}
