import Image from "next/image";
import Link from "next/link";
import { Box, Center, Heading, Grid, GridItem } from "@chakra-ui/react";
import Calendar from "react-calendar";
import "react-calendar/dist/Calendar.css";

export default function Home() {
  const daysInMonth = new Date(2023, 10, 0).getDate();
  const daysArray = Array.from({ length: daysInMonth }, (_, i) => i + 1);

  return (
    <main>
      <div>
        <div id="centered" className="flex items-center justify-center mt-12">
          <Image src="/logo.png" alt="" width={500} height={500} />
        </div>

        {/* <Link href="/log">Log</Link> */}

        {/* <Center>
          <Box>
            <Center>
              <Heading size="md">October 2023</Heading>
            </Center>
            <Grid templateColumns="repeat(7, 1fr)" gap={0.5} p={1}>
              <Center m={2}>Sun</Center>
              <Center m={2}>Mon</Center>
              <Center m={2}>Tue</Center>
              <Center m={2}>Wed</Center>
              <Center m={2}>Thu</Center>
              <Center m={2}>Fri</Center>
              <Center m={2}>Sat</Center>
              {daysArray.map((day) => (
                <Center
                  key={day}
                  m={2}
                  bg={day === 22 ? "#5498EE" : "transparent"}
                >
                  <GridItem
                    colSpan={1}
                    borderWidth={day === 22 ? 1 : 0}
                    borderColor="#5498EE"
                    color={day === 22 ? "white" : "black"}
                  >
                    {day}
                  </GridItem>
                </Center>
              ))}
            </Grid>
          </Box>
        </Center> */}

        <Calendar onChange={() => {}} value={new Date()} />
      </div>
    </main>
  );
}