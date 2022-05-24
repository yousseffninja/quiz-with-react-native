import react, {useState} from "react";
import {View, Text, StyleSheet, Button, TouchableOpacity} from 'react-native';

const [total, setTotal] = useState(0);
const [count, setCount] = useState(0);

const increment = () =>{
    setCount(count +1 )
    setTotal(props.price * count)
}

const decrement = () =>{
    if(count === '0'){

    }
    else{
        setCount(count - 1)
        setTotal(props.price * count)
    }
}

const Card = props => {
    return (
        <View>
            <Text>ID: {props.id}</Text>
            <Text>Name: {props.name}</Text>
            <Text>Price: {props.price}</Text>
            <Text>Total: {total}</Text>
            <View>
                <Button 
                    title="-"
                    onPress={null}
                />
                <Text>{count}</Text>
                <Button
                    title="+"
                    onPress={null}
                />
            </View>
        </View>
    );
}

export default Card;