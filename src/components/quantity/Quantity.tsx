import { Button, HStack, Input, useNumberInput } from "@chakra-ui/react";

interface IQuantityProps {
  step?: number;
  defaultValue?: number;
  min?: number;
  max?: number;
  disabled?: boolean;
  setQuantity: (valueAsString: string, valueAsNumber: number) => void;
}

export const Quantity = ({
  step = 1,
  defaultValue = 1,
  min = 1,
  max = 20,
  disabled = false,
  setQuantity,
}: IQuantityProps) => {
  const { getInputProps, getIncrementButtonProps, getDecrementButtonProps } =
    useNumberInput({
      step,
      defaultValue,
      min,
      max,
      onChange(valueAsString, valueAsNumber) {
        setQuantity(valueAsString, valueAsNumber);
      },
    });

  const inc = getIncrementButtonProps();
  const dec = getDecrementButtonProps();
  const input = getInputProps();

  return (
    <HStack maxW="140px" my="0.5rem">
      <Button
        {...dec}
        disabled={disabled}
        variant="outline"
        bgColor="brand.whiteCream"
        borderColor="brand.primary"
        color="brand.primary"
        rounded="sm"
        size="md"
      >
        -
      </Button>
      <Input
        {...input}
        readOnly={true}
        minW="52px"
        color="brand.primaryDarker"
        focusBorderColor="brand.primaryDark"
        rounded="sm"
        size="md"
      />
      <Button
        {...inc}
        disabled={disabled}
        variant="outline"
        bgColor="brand.whiteCream"
        borderColor="brand.primary"
        color="brand.primary"
        rounded="sm"
        size="md"
      >
        +
      </Button>
    </HStack>
  );
};
