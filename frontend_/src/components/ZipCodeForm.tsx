import {
  Box,
  Button,
  Divider,
  HStack,
  Heading,
  Input,
  Select,
  SimpleGrid,
  Stack,
  Text
} from "@chakra-ui/react";
import { ChangeEvent, FormEvent, useState } from "react";
import ReactCountryFlag from "react-country-flag";
import { countries } from "../utils/zippopotam";

interface Props {
  error?: string;
  isLoading?: boolean;
  onSearch: (country: string, zipcode: string) => void;
}
export default function ZipCodeForm({
  isLoading = false,
  error,
  onSearch
}: Props) {
  const [formData, setFormData] = useState({
    country: "US",
    zipcode: ""
  });

  const handleChange = (
    event: ChangeEvent<HTMLInputElement | HTMLSelectElement>
  ) => {
    const { name, value } = event.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    onSearch(formData.country, formData.zipcode);
    setFormData({
      country: "US",
      zipcode: ""
    });
  };

  return (
    <form onSubmit={handleSubmit}>
      <Stack
        p={10}
        bg="#fff"
        borderRadius="xl"
        border="1px solid"
        borderColor="#000"
        boxShadow="#000 10px 10px"
        minH="550px"
      >
        <Heading size="lg" maxW="80%">
          Encuentra Códigos Postales y Ciudades
        </Heading>
        <Text>
          Tu guía para localizar códigos postales y ciudades en todo el mundo
        </Text>
        <Stack spacing={3} mt={10}>
          <SimpleGrid columns={2} gap={2}>
            <HStack border="1px solid #000" borderRadius="lg" pl={2}>
              <ReactCountryFlag
                countryCode={formData.country}
                svg
                style={{
                  width: "1.5em",
                  height: "1.5em"
                }}
              />
              <Select
                value={formData.country}
                size="lg"
                border="none"
                name="country"
                onChange={handleChange}
              >
                {countries.map((item) => (
                  <option value={item.code}>{item.name}</option>
                ))}
              </Select>
            </HStack>
            <Input
              autoFocus
              name="zipcode"
              value={formData.zipcode}
              isRequired
              size="lg"
              border="1px solid #000"
              placeholder="Código postal"
              onChange={handleChange}
            />
          </SimpleGrid>
        </Stack>
        <HStack my={5}>
          <Divider borderColor="gray.300" />
          <Box
            h="10px"
            minW="10px"
            w="10px"
            borderRadius="full"
            bg="gray.300"
          />
          <Divider borderColor="gray.300" />
        </HStack>
        <Text color="red.500" fontSize="sm">
          {error}
        </Text>
        <Button
          type="submit"
          size="lg"
          fontWeight={500}
          bg="#000"
          color="#fff"
          isLoading={isLoading}
          _hover={{
            bg: "#000",
            color: "#fff"
          }}
        >
          Buscar lugares
        </Button>
      </Stack>
    </form>
  );
}
