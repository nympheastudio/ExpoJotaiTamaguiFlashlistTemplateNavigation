import React from 'react';
import { Text } from 'react-native';
import { useAtom } from 'jotai';
import { homeCountAtom } from '../store/jotaiState';
import { primaryColorAtom, fontSizeAtom } from '../store/settingsAtoms';
import { YStack, H1, H2, H3, styled,Button } from 'tamagui';

const StyledButton = styled(Button, {
  borderColor: '$color',
  borderWidth: 1,
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginVertical: 5,
  color: '$color',
});

const Home = ({ navigation }) => {
  const [count, setCount] = useAtom(homeCountAtom);
  const [primaryColor] = useAtom(primaryColorAtom);
  const [fontSize] = useAtom(fontSizeAtom);

  return (
    <YStack f={1} ai="center" jc="center" p="$4" space="$4">
      <H1 style={{ color: primaryColor, fontSize: fontSize }}>Home Screen</H1>
      <H2 style={{ color: primaryColor, fontSize: fontSize }}>Cool template with </H2>
      <H3>Tamagui UI, Jotai & FlashList</H3>
      <StyledButton
        size="$4"
        onPress={() => setCount(count + 1)}
        style={{ backgroundColor: primaryColor, color: '#fff' }}
      >
        Increment Jotai persistant Count: <Text>{count}</Text>
      </StyledButton>
      <YStack space="$3">
        <StyledButton
          size="$4"
          onPress={() => navigation.navigate('Example')}
          style={{ backgroundColor: primaryColor, color: '#fff' }}
        >
          Go to Example Component
        </StyledButton>
        <StyledButton
          size="$4"
          onPress={() => navigation.navigate('Data')}
          style={{ backgroundColor: primaryColor, color: '#fff' }}
        >
          Go to FlashList Screen
        </StyledButton>
        <StyledButton
          size="$4"
          onPress={() => navigation.navigate('Profile')}
          style={{ backgroundColor: primaryColor, color: '#fff' }}
        >
          Go to Profile Screen
        </StyledButton>
        <StyledButton
          size="$4"
          onPress={() => navigation.navigate('Settings')}
          style={{ backgroundColor: primaryColor, color: '#fff' }}
        >
          Go to Settings Screen
        </StyledButton>
      </YStack>
    </YStack>
  );
};

export default Home;
