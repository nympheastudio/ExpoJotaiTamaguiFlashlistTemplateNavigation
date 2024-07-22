// src/views/ExampleComponent.js
import React from 'react';
import { useAtom } from 'jotai';
import { YStack, H2, Button } from 'tamagui';
import { exampleCountAtom } from '../store/jotaiState'; // Adjust the path as needed
import { primaryColorAtom, fontSizeAtom } from '../store/settingsAtoms';

const ExampleComponent = () => {
  const [count, setCount] = useAtom(exampleCountAtom);
  const [primaryColor] = useAtom(primaryColorAtom);
  const [fontSize] = useAtom(fontSizeAtom);

  return (
    <YStack f={1} ai="center" jc="center" p="$4" space="$4">
      <H2 style={{ color: primaryColor, fontSize }}>{count}</H2>
      <Button size="$4" onPress={() => setCount(count + 1)}>
        Increment
      </Button>
    </YStack>
  );
};

export default ExampleComponent;
