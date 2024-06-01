import React from "react";
import { View, Text, StyleSheet } from "react-native";
import { Link } from "expo-router";
import FontAwesome from "react-native-vector-icons/FontAwesome";

export default function NavigationTab() {
    return (
        <View style={styles.container}>
            <View style={styles.tabContainer}>
                <Link href="/map" style={styles.tab}>
                    <View style={styles.tabContent}>
                        <FontAwesome name="map-o" size={30} style={styles.icon} />
                        <Text style={styles.tabText}>Map</Text>
                    </View>
                </Link>
                <Link href="/directory" style={styles.tab}>
                    <View style={styles.tabContent}>
                        <FontAwesome name="book" size={30} style={styles.icon} />
                        <Text style={styles.tabText}>Directory</Text>
                    </View>
                </Link>
                <Link href="/forum" style={styles.tab}>
                    <View style={styles.tabContent}>
                        <FontAwesome name="wechat" size={30} style={styles.icon} />
                        <Text style={styles.tabText}>Forum</Text>
                    </View>
                </Link>
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'space-around', 
    },
    tabContainer: {
        flexDirection: 'row',
        justifyContent: 'space-around', 
        paddingVertical: 10,
        paddingLeft: 70,
        backgroundColor: 'plum',
        borderTopWidth: 1,
        borderTopColor: '#ccc',
        width: '100%',
        height: 80,
        shadowColor: '#006',
        shadowOpacity: 0.5,
        shadowRadius: 5,
        shadowOffset: { width: 0, height: 2 },
    },
    tab: {
        flex: 1,
        alignItems: 'center',
    },
    tabContent: {
        alignItems: 'center',
    },
    icon: {
        marginBottom: 4,
    },
    tabText: {
        fontSize: 14,
    },
});
