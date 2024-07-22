import React from 'react';
import { useAtom } from 'jotai';
import { YStack, XStack, H1,H2, Paragraph, Button, Slider, Label, styled, Group } from 'tamagui';
import { primaryColorAtom, fontSizeAtom, darkModeAtom } from '../store/settingsAtoms';

const StyledButton = styled(Button, {
  borderColor: '$color',
  borderWidth: 1,
  borderRadius: 8,
  paddingVertical: 10,
  paddingHorizontal: 20,
  marginVertical: 5,
  color: '$color',
});

const SettingsScreen = () => {
  const [primaryColor, setPrimaryColor] = useAtom(primaryColorAtom);
  const [fontSize, setFontSize] = useAtom(fontSizeAtom);
  const [isDarkMode, setIsDarkMode] = useAtom(darkModeAtom);

  const incrementFontSize = () => setFontSize((size) => size + 1);
  const decrementFontSize = () => setFontSize((size) => Math.max(size - 1, 12));

  return (
    <YStack f={1} p="$4" ai="center" space>
      <H1 style={{ color: primaryColor, fontSize: fontSize  }}>Settings</H1>
 
      <H2 style={{ color: primaryColor, fontSize: fontSize }}>This is a preview text with the current settings.</H2>
      <YStack space="$4" mt="$6" w="80%">
        <Label>Primary Color</Label>
        <XStack space>
          <StyledButton
            onPress={() => setPrimaryColor('#6200ea')}
            style={{ backgroundColor: '#6200ea', color: '#fff' }}
          >
            #6200ea
          </StyledButton>
          <StyledButton
            onPress={() => setPrimaryColor('#03dac6')}
            style={{ backgroundColor: '#03dac6', color: '#000' }}
          >
            #03dac6
          </StyledButton>
          <StyledButton
            onPress={() => setPrimaryColor('#ff0266')}
            style={{ backgroundColor: '#ff0266', color: '#fff' }}
          >
            #ff0266
          </StyledButton>
        </XStack>

        <Label mt="$4">Font Size</Label>
        <XStack ai="center" space="$4">
          <StyledButton size="$4" onPress={decrementFontSize} style={{ backgroundColor: primaryColor, color: '#fff' }}>-</StyledButton>
          <Paragraph>{fontSize}px</Paragraph>
          <StyledButton size="$4" onPress={incrementFontSize} style={{ backgroundColor: primaryColor, color: '#fff' }}>+</StyledButton>
        </XStack>
        <Slider
          value={[fontSize]}
          min={12}
          max={40}
          step={1}
          onValueChange={(value) => setFontSize(value[0])}
        />

        <Label mt="$4">Dark Mode</Label>
        <Group orientation="horizontal">
          <Group.Item>
            <StyledButton
              onPress={() => setIsDarkMode(false)}
              style={{
                backgroundColor: isDarkMode ? '#f0f0f0' : primaryColor,
                color: isDarkMode ? '#000' : '#fff',
              }}
            >
              Light
            </StyledButton>
          </Group.Item>
          <Group.Item>
            <StyledButton
              onPress={() => setIsDarkMode(true)}
              style={{
                backgroundColor: isDarkMode ? primaryColor : '#f0f0f0',
                color: isDarkMode ? '#fff' : '#000',
              }}
            >
              Dark
            </StyledButton>
          </Group.Item>
        </Group>
      </YStack>
    </YStack>
  );
};

export default SettingsScreen;
