import { Pregunta, testFinanciero } from '@/data/testFinanciero';
import { globalStyles } from '@/styles/globalStyles';
import { Ionicons } from '@expo/vector-icons';
import { router } from 'expo-router';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Appbar, Button, RadioButton } from 'react-native-paper';

const Quiz = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [answers, setAnswers] = useState<{ [key: number]: number }>({});
  const [selectedValue, setSelectedValue] = useState<string | null>(null);
  const [showResult, setShowResult] = useState(false);

  const currentQuestion: Pregunta = testFinanciero[currentIndex];

  const handleNext = () => {
    if (selectedValue !== null) {
      setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: parseInt(selectedValue),
      }));

      const isLast = currentIndex === testFinanciero.length - 1;

      if (isLast) {
        setShowResult(true);
      } else {
        setCurrentIndex(prev => prev + 1);
        setSelectedValue(null);
      }
    }
  };

  const calculateScore = () => Object.values(answers).reduce((sum, val) => sum + val, 0);

  const renderResult = () => {
    const score = calculateScore();
    if (score >= 6 && score <= 8) {
      return "⚠️ ¡VIOLENCIA FINANCIERA! Tus respuestas muestran signos de control o abuso económico. Busca apoyo profesional o legal.";
    } else if (score >= 3 && score <= 5) {
      return "⚠️ RIESGO LEVE: Hay comportamientos que podrían indicar control financiero. Habla con alguien de confianza y fortalece tu independencia económica.";
    }
    return "✅ SIN INDICIOS: No presentas señales claras de violencia financiera. Mantén tus hábitos saludables de administración y autonomía económica.";
  };

  if (showResult) {
    return (
      <View>
        <Appbar.Header style={{ backgroundColor: '#D8DCDC', elevation: 0 }}>
          <Appbar.Content title="Resultado del Test" />
        </Appbar.Header>

        <View style={styles.innerContent}>
          <TouchableOpacity style={globalStyles.backButton}onPress={() => router.back()}>
        <Ionicons name="arrow-back" size={24} color="#333" />
      </TouchableOpacity>
          <Text style={styles.title}>Resultado</Text>
          <Text style={styles.result}>{renderResult()}</Text>

          {calculateScore() >= 6 && (
            <Button
              mode="contained"
              style={styles.helpButton}
              onPress={() =>
                Linking.openURL(
                  'https://denuncia.org/guias-por-delito/como-denunciar-el-delito-de-violencia-familiar/'
                )
              }>
              Pedir ayuda
            </Button>
          )}
        </View>
      </View>
    );
  }

  return (
    <View style={styles.container}>
      <Appbar.Header style={{ backgroundColor: '#D8DCDC', elevation: 0 }}>
        <Appbar.Content title="Test: Violencia Financiera" titleStyle={{ color: '#000' }} />
      </Appbar.Header>

      <View style={styles.innerContent}>
        <Text style={styles.question}>{currentQuestion.question}</Text>

        <RadioButton.Group
          onValueChange={value => setSelectedValue(value)}
          value={selectedValue}>
          {currentQuestion.options.map((option, idx) => (
            <View key={idx} style={styles.optionContainer}>
              <RadioButton value={option.value.toString()} />
              <Text style={styles.optionText}>{option.text}</Text>
            </View>
          ))}
        </RadioButton.Group>

        <Button
          mode="contained"
          onPress={handleNext}
          disabled={selectedValue === null}
          style={styles.button}>
          {currentIndex === testFinanciero.length - 1 ? 'Ver resultado' : 'Siguiente'}
        </Button>
      </View>
    </View>
  );
};

export default Quiz;


const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    justifyContent: 'center',
    backgroundColor: '#D8DCDC',
  },
  question: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  optionContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
  },
  optionText: {
    fontSize: 16,
  },
  button: {
    marginTop: 30,
  },
  title: {
    fontSize: 24,
    textAlign: 'center',
    fontWeight: 'bold',
  },
  result: {
    fontSize: 18,
    textAlign: 'center',
    marginTop: 20,
  },
  helpButton: {
    marginTop: 20,
    backgroundColor: '#d32f2f',
  },
  innerContent: {
    flex: 1,
    padding: 20,
  },
});