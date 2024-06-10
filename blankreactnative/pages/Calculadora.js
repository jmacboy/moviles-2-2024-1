import React, { useState } from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
const Calculadora = () => {
    const [resultado, setResultado] = useState("");
    const [numAnterior, setNumAnterior] = useState(0);
    const [operation, setOperation] = useState("");
    const addNumber = (number) => () => {
        setResultado(resultado + number);
    };
    const startOperation = (operation) => () => {
        setNumAnterior(parseInt(resultado));
        setResultado("");
        setOperation(operation);
    };
    const calculate = () => {
        const numActual = parseInt(resultado);
        let newResult = 0;
        switch (operation) {
            case "+":
                newResult = numAnterior + numActual;
                break;
            case "-":
                newResult = numAnterior - numActual;
                break;
            case "*":
                newResult = numAnterior * numActual;
                break;
            case "/":
                newResult = numAnterior / numActual;
                break;
        }
        setResultado(newResult.toString());
        setNumAnterior(0);
    };
    return (
        <View style={styles.container}>
            <View style={styles.resultContainer}>
                <Text style={styles.resultText}>{resultado || "0"}</Text>
            </View>
            <View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={addNumber(1)} style={styles.btn}>
                        <Text style={styles.btnText}>1</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(2)} style={styles.btn}>
                        <Text style={styles.btnText}>2</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(3)} style={styles.btn}>
                        <Text style={styles.btnText}>3</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={addNumber(4)} style={styles.btn}>
                        <Text style={styles.btnText}>4</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(5)} style={styles.btn}>
                        <Text style={styles.btnText}>5</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(6)} style={styles.btn}>
                        <Text style={styles.btnText}>6</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={addNumber(7)} style={styles.btn}>
                        <Text style={styles.btnText}>7</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(8)} style={styles.btn}>
                        <Text style={styles.btnText}>8</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={addNumber(9)} style={styles.btn}>
                        <Text style={styles.btnText}>9</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={addNumber(0)} style={styles.btn}>
                        <Text style={styles.btnText}>0</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={startOperation("+")} style={styles.btn}>
                        <Text style={styles.btnText}>+</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={startOperation("-")} style={styles.btn}>
                        <Text style={styles.btnText}>-</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={startOperation("*")} style={styles.btn}>
                        <Text style={styles.btnText}>x</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={startOperation("/")} style={styles.btn}>
                        <Text style={styles.btnText}>/</Text>
                    </TouchableOpacity>
                </View>
                <View style={styles.pnlBotones}>
                    <TouchableOpacity onPress={calculate} style={styles.btn}>
                        <Text style={styles.btnText}>=</Text>
                    </TouchableOpacity>
                </View>
            </View>
        </View>
    );
};
const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        padding: 20,
    },
    resultContainer: {
        borderWidth: 1,
        borderColor: "gray",
        padding: 10,
        flexDirection: "row-reverse",
        marginBottom: 10,
    },
    resultText: {
        fontSize: 30,
    },
    pnlBotones: {
        flexDirection: "row",
    },
    btn: {
        flex: 1,
        backgroundColor: "gray",
        margin: 5,
        padding: 10,
    },
    btnText: {
        color: "white",
        fontSize: 20,
        textAlign: "center",
    },
});

export default Calculadora;
