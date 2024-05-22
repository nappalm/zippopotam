import {
  Button,
  Card,
  CardBody,
  HStack,
  Heading,
  Image,
  Stack,
  Text
} from "@chakra-ui/react";
import ReactCountryFlag from "react-country-flag";
import map from "../assets/map.png";
import { useStoreContext } from "../context/StoreContext";
import { ZipCode } from "../types";

interface Props {
  onClick: (item: ZipCode) => void;
}
export default function ZipCodeList({ onClick }: Props) {
  const { data, remove } = useStoreContext();

  const handleClear = () => {
    remove?.();
  };

  const handleClick = (item: ZipCode) => {
    onClick(item);
  };

  return (
    <Stack>
      <HStack justify="space-between">
        <Stack spacing={0} mb={3}>
          <Heading size="md">Busquedas recientes</Heading>
          <Text>Presiona para ver mas detalles</Text>
        </Stack>
        <Button variant="ghost" fontWeight={500} onClick={handleClear}>
          Limpiar
        </Button>
      </HStack>
      {data.map((item) => (
        <Card
          key={item.country}
          onClick={() => handleClick(item)}
          boxShadow="none"
          border="1px solid #000"
          transition="box-shadow 300ms ease-out"
          _hover={{
            cursor: "pointer",
            boxShadow: "#000 3px 3px"
          }}
        >
          <CardBody p={2}>
            <HStack>
              <Image src={map} h="50px" w="50px" borderRadius="md" />
              <HStack>
                <ReactCountryFlag
                  countryCode={item?.["country abbreviation"] || "US"}
                  svg
                  style={{
                    width: "1.5em",
                    height: "1.5em",
                    position: "absolute",
                    left: 10,
                    bottom: 10,
                    border: "3px solid #fff"
                  }}
                />
                <Stack spacing={0}>
                  <Text>{item.country}</Text>
                  <Text>{item["post code"]}</Text>
                </Stack>
              </HStack>
            </HStack>
          </CardBody>
        </Card>
      ))}
    </Stack>
  );
}
