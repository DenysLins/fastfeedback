import { Button } from "@chakra-ui/button";
import { Code, Heading, Text } from "@chakra-ui/layout";
import { useAuth } from "../lib/auth";

export default function Home() {
  const auth = useAuth();

  return (
    <main>
      <Heading>Fast Feedback</Heading>
      <Text>
        Current user:{" "}
        <Code>
          {auth?.user?.name} - {auth?.user?.email}
        </Code>
      </Text>
      {auth.user ? (
        <Button onClick={() => auth.signout()}>Sign Out</Button>
      ) : (
        <Button onClick={() => auth.signinWithGitHub()}>Sign In</Button>
      )}
    </main>
  );
}
