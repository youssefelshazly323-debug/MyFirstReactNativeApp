import { Platform, StyleSheet, TextInput } from 'react-native';
import { SafeAreaView } from 'react-native-safe-area-context';
import { useState } from 'react';

import { AnimatedIcon } from '@/components/animated-icon';
import { ThemedText } from '@/components/themed-text';
import { ThemedView } from '@/components/themed-view';
import { WebBadge } from '@/components/web-badge';
import { BottomTabInset, MaxContentWidth, Spacing } from '@/constants/theme';

export default function HomeScreen() {
  const [textCharacters, setTextCharacters] = useState('');
  const [textWords, setTextWords] = useState('');
  const [textSentences, setTextSentences] = useState('');
  const [textNone, setTextNone] = useState('');

  return (
    <ThemedView style={styles.container}>
      <SafeAreaView style={styles.safeArea}>
        <ThemedView style={styles.heroSection}>
          <AnimatedIcon />
          <ThemedText type="title" style={styles.title}>
            Welcome to&nbsp;Expo
          </ThemedText>
        </ThemedView>

        <ThemedText type="code" style={styles.code}>
          auto capitalization examples
        </ThemedText>

        <ThemedView type="backgroundElement" style={styles.stepContainer}>
          <ThemedText type="subtitle">Auto Capitalize Characters</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Every letter is capitalized"
            value={textCharacters}
            onChangeText={setTextCharacters}
            autoCapitalize="characters"
            placeholderTextColor="#999"
          />

          <ThemedText type="subtitle">Auto Capitalize Words</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="First letter of each word"
            value={textWords}
            onChangeText={setTextWords}
            autoCapitalize="words"
            placeholderTextColor="#999"
          />

          <ThemedText type="subtitle">Auto Capitalize Sentences</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="Start of sentences capitalized"
            value={textSentences}
            onChangeText={setTextSentences}
            autoCapitalize="sentences"
            placeholderTextColor="#999"
          />

          <ThemedText type="subtitle">No Auto Capitalization</ThemedText>
          <TextInput
            style={styles.input}
            placeholder="No auto capitalization"
            value={textNone}
            onChangeText={setTextNone}
            autoCapitalize="none"
            placeholderTextColor="#999"
          />
        </ThemedView>

        {Platform.OS === 'web' && <WebBadge />}
      </SafeAreaView>
    </ThemedView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    flexDirection: 'row',
  },
  safeArea: {
    flex: 1,
    paddingHorizontal: Spacing.four,
    alignItems: 'center',
    gap: Spacing.three,
    paddingBottom: BottomTabInset + Spacing.three,
    maxWidth: MaxContentWidth,
  },
  heroSection: {
    alignItems: 'center',
    justifyContent: 'center',
    flex: 1,
    paddingHorizontal: Spacing.four,
    gap: Spacing.four,
  },
  title: {
    textAlign: 'center',
  },
  code: {
    textTransform: 'uppercase',
  },
  stepContainer: {
    gap: Spacing.three,
    alignSelf: 'stretch',
    paddingHorizontal: Spacing.three,
    paddingVertical: Spacing.four,
    borderRadius: Spacing.four,
  },
  input: {
    borderWidth: 1,
    borderColor: '#ccc',
    borderRadius: 8,
    padding: 12,
    fontSize: 16,
    backgroundColor: '#fff',
    color: '#000',
  },
});
