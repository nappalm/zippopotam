import { Box, Container, SimpleGrid, useBoolean } from "@chakra-ui/react";
import { AxiosError } from "axios";
import ZipCodeForm from "./components/ZipCodeForm";

import { useState } from "react";
import ZipCodeList from "./components/ZipCodeList";
import ZipCodePreview from "./components/ZipCodePreview";
import { useStoreContext } from "./context/StoreContext";
import { zippopotamApi } from "./service";
import { ZipCode } from "./types";

function App() {
  const { data, mutate } = useStoreContext();

  const [current, setCurrent] = useState<ZipCode | null>(null);
  const [error, setError] = useState<string>();
  const [loading, setLoading] = useBoolean();

  const handleSearch = async (country: string, zipcode: string) => {
    try {
      setLoading.on();
      setError(undefined);

      const response = await zippopotamApi.get(
        `/zipcode/${country}/${zipcode}`
      );

      setCurrent(response.data);
      mutate?.(response.data);

      setLoading.off();
    } catch (e) {
      const error = e as AxiosError;
      setError(error.message);

      setLoading.off();
    }
  };

  const isEmptyData = !data.length;
  const columns = isEmptyData ? 1 : 2;
  return (
    <Box className="dotted" minH="100vh">
      <Container
        maxW={isEmptyData ? "container.sm" : "container.lg"}
        py={[5, 5, 10]}
      >
        <SimpleGrid columns={[1, 1, columns, columns]} gap={20} mt={10}>
          <ZipCodeForm
            onSearch={handleSearch}
            isLoading={loading}
            error={error}
          />
          <ZipCodePreview zipCode={current} onClose={() => setCurrent(null)} />
          {!isEmptyData && <ZipCodeList onClick={setCurrent} />}
        </SimpleGrid>
      </Container>
    </Box>
  );
}

export default App;
