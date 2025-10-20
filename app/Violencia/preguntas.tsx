import { Question, questions } from '@/data/questions';
import React, { useState } from 'react';
import { Linking, StyleSheet, Text, View } from 'react-native';
import { Appbar, Button, RadioButton } from 'react-native-paper';

const Quiz = () => {
    const [currentIndex, setCurrentIndex] = useState(0);
    const [answers, setAnswers] = useState<{ [key: number]: number }>({});
    const [selectedValue, setSelectedValue] = useState<string | null>(null);
    const [showResult, setShowResult] = useState(false);

    const currentQuestion: Question = questions[currentIndex];

    const handleNext = () => {
        if (selectedValue !== null) {
            setAnswers(prev => ({
        ...prev,
        [currentQuestion.id]: parseInt(selectedValue),
    }));
    const isLast = currentIndex === questions.length - 1;
    if (isLast) {
        setShowResult(true);
    } else {
        setCurrentIndex(prev => prev + 1);
        setSelectedValue(null); // limpiar selección
        }
    }
};


const calculateScore = () => {
    return Object.values(answers).reduce((sum, val) => sum + val, 0);
};

const isDangerScore = () => {
    const score = calculateScore();
    return score >= 23 && score <= 45;
};

const renderResult = () => {
    const score = calculateScore();
    if (score >= 35 && score <= 45) {
    return "¡¡¡ABUSO PELIGROSO!!! Debes considerar en forma URGENTE e inmediata la posibilidad de dejar la relación en forma temporal y obtener apoyo externo, judicial y legal. El problema de violencia no se resuelve por sí mismo o conque ambos lo quieran. ";
    } else if (score >= 23 && score <= 34) {
    return "ABUSO SEVERO: En este punto es importante solicitar ayuda institucional o personal y abandonar la casa temporalmente.";
    } else if (score >= 12 && score <= 22) {
    return "PRIMER NIVEL DE ABUSO: La violencia en la relación está comenzando. Es una situación de ALERTA y un indicador de que la violencia puede aumentar en el futuro.";
    } else if (score >= 11) {
    return "RELACIÓN ABUSIVA: Existencia de problemas en los hogares, pero que se resuelven sin violencia física.";
}

return "VIVES UNA RELACIÓN SANA";
};

if (showResult) {
    return (
    <View>
        <Appbar.Header style={{backgroundColor: '#D8DCDC', elevation: 0}}>
        <Appbar.Content title="Test para medir la violencia" />
        </Appbar.Header>

        <View style={styles.innerContent}>
            <Text style={styles.title}>Resultado</Text>
            <Text style={styles.result}>{renderResult()}</Text>
            
            {isDangerScore() && (
            <Button mode="contained" 
            style={styles.helpButton}
            onPress={() => Linking.openURL('https://denuncia.org/guias-por-delito/como-denunciar-el-delito-de-violencia-familiar/')}>Pedir ayuda
            </Button>)}
        </View>
    </View>
    );
}

return (
    <View style={styles.container}>
        <Appbar.Header style={{ backgroundColor: '#D8DCDC', elevation: 0 }}>
        <Appbar.Content title="Test para medir la violencia" 
        titleStyle={{ color: '#000' }}/>
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
            
            {currentIndex === questions.length - 1
            ? 'Ver resultado'
            : 'Siguiente'}
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