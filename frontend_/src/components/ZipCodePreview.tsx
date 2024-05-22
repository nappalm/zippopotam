import {
  Card,
  CardBody,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerOverlay,
  HStack,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import { ZipCode } from "../types";
import ReactCountryFlag from "react-country-flag";
import map from "../assets/map.png";

interface Props {
  zipCode: ZipCode | null;
  onClose: VoidFunction;
}

export default function ZipCodePreview({ zipCode, onClose }: Props) {
  return (
    <Drawer isOpen={!!zipCode} onClose={onClose} size="md" closeOnEsc={false}>
      <DrawerOverlay />
      <DrawerContent borderLeft="1px solid #000">
        <DrawerCloseButton />
        <DrawerBody>
          <Stack align="center" py={10}>
            <ReactCountryFlag
              countryCode={zipCode?.["country abbreviation"] || "US"}
              svg
              style={{
                width: "2em",
                height: "2em"
              }}
            />
            <Heading size="md">{zipCode?.country}</Heading>
            <Heading size="sm">{zipCode?.["post code"]}</Heading>
          </Stack>
          <Stack>
            <Heading size="md">Lugares</Heading>
            {zipCode?.places.map((item) => (
              <Card border="1px solid #000" key={item["place name"]}>
                <CardBody p={2}>
                  <HStack>
                    <Image
                      border="1px solid #000"
                      boxShadow="#000 2px 2px"
                      h="50px"
                      w="50px"
                      src={map}
                      borderRadius="lg"
                    />
                    <Stack spacing={0}>
                      <Text>{item["place name"]}</Text>
                      <Text fontSize="sm" color="gray.500">
                        {item.state}
                      </Text>
                    </Stack>
                  </HStack>
                </CardBody>
              </Card>
            ))}
          </Stack>
        </DrawerBody>
      </DrawerContent>
    </Drawer>
  );
}
