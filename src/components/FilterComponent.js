import React, {useEffect, useRef, useState} from 'react';
import {
  Animated,
  Dimensions,
  Modal,
  PanResponder,
  StyleSheet,
  View,
  Text,
  Switch,
  TouchableOpacity,
} from 'react-native';

const FilterComponent = props => {
  const screenHeight = Dimensions.get('screen').height;
  const panY = useRef(new Animated.Value(screenHeight)).current;
  const [isEnabled, setIsEnabled] = useState('Most Popular');

  const toggleSwitch = switchNumber => {
    setIsEnabled(switchNumber === isEnabled ? '' : switchNumber);
  };

  const switchOne = value => {
    toggleSwitch('Releases');
  };
  const switchTwo = value => {
    toggleSwitch('Old Movies');
  };
  const switchThree = value => {
    toggleSwitch('Most Popular');
  };
  const switchFour = value => {
    toggleSwitch('Least Popular');
  };
  const switchFive = value => {
    toggleSwitch('Highest Grossing');
  };
  const switchSix = value => {
    toggleSwitch('Least Grossing');
  };

  const resetPositionAnim = Animated.timing(panY, {
    toValue: 0,
    duration: 300,
    useNativeDriver: true,
  });

  const closeAnim = Animated.timing(panY, {
    toValue: screenHeight,
    duration: 500,
    useNativeDriver: true,
  });

  const translateY = panY.interpolate({
    inputRange: [-1, 0, 1],
    outputRange: [0, 0, 1],
  });

  const handleDismiss = () => closeAnim.start(props.onDismiss);

  useEffect(() => {
    resetPositionAnim.start();
  }, [resetPositionAnim]);

  const panResponders = useRef(
    PanResponder.create({
      onStartShouldSetPanResponder: () => true,
      onMoveShouldSetPanResponder: () => false,
      onPanResponderMove: Animated.event([null, {dy: panY}], {
        useNativeDriver: false,
      }),
      onPanResponderRelease: (_, gs) => {
        if (gs.dy > 0 && gs.vy > 2) {
          return handleDismiss();
        }
        return resetPositionAnim.start();
      },
    }),
  ).current;

  return (
    <Modal
      animated
      animationType="fade"
      visible={props.visible}
      transparent
      onRequestClose={handleDismiss}>
      <View style={styles.overlay}>
        <Animated.View
          style={{
            ...styles.container,
            transform: [{translateY: translateY}],
          }}
          {...panResponders.panHandlers}>
          <View style={styles.sliderIndicatorRow}>
            <View style={styles.sliderIndicator} />
          </View>
          <View style={styles.filterWrapper}>
            <Text style={styles.filterHeading}>Filter</Text>

            <View style={styles.filterCategory}>
              <Text style={styles.filterCategoryHeading}>Date</Text>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Releases</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchOne}
                  value={isEnabled === 'Releases'}
                />
              </View>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Old</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchTwo}
                  value={isEnabled === 'Old Movies'}
                />
              </View>
            </View>

            <View style={styles.filterCategory}>
              <Text style={styles.filterCategoryHeading}>Popularity</Text>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Most Popular</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchThree}
                  value={isEnabled === 'Most Popular'}
                />
              </View>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Less Popular</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchFour}
                  value={isEnabled === 'Least Popular'}
                />
              </View>
            </View>

            <View style={styles.filterCategory}>
              <Text style={styles.filterCategoryHeading}>Revenue</Text>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Higher Revenue</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchFive}
                  value={isEnabled === 'Highest Grossing'}
                />
              </View>
              <View style={styles.filterItem}>
                <Text style={styles.filterText}>Lower Revenue</Text>
                <Switch
                  style={styles.Switch}
                  trackColor={{true: '#146A5E', false: 'gray'}}
                  thumbColor="white"
                  onValueChange={switchSix}
                  value={isEnabled === 'Least Grossing'}
                />
              </View>
            </View>

            <TouchableOpacity
              style={styles.confirmBtn}
              onPress={() => {
                props.activeFilter(isEnabled);
                handleDismiss();
              }}>
              <Text style={styles.confirmBtnTxt}>Confirm</Text>
            </TouchableOpacity>
          </View>
        </Animated.View>
      </View>
    </Modal>
  );
};

const styles = StyleSheet.create({
  overlay: {
    backgroundColor: 'rgba(0,0,0,0.4)',
    flex: 1,
    justifyContent: 'flex-end',
  },
  container: {
    backgroundColor: '#191919',
    paddingTop: 12,
    paddingHorizontal: 12,
    borderTopRightRadius: 12,
    borderTopLeftRadius: 12,
    minHeight: 400,
  },
  sliderIndicatorRow: {
    flexDirection: 'row',
    marginBottom: 4,
    alignItems: 'center',
    justifyContent: 'center',
  },
  sliderIndicator: {
    backgroundColor: '#CECECE',
    height: 4,
    width: 45,
  },
  filterHeading: {
    color: 'gray',
    textAlign: 'center',
    marginTop: 10,
    fontSize: 20,
  },
  Switch: {
    transform: [{scale: 0.75}],
  },
  filterItem: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginLeft: 20,
    marginBottom: 10,
  },
  filterCategoryHeading: {
    color: 'gray',
    fontSize: 18,
    marginBottom: 10,
  },
  filterText: {
    color: 'gray',
    fontSize: 18,
  },
  confirmBtn: {
    height: '10%',
    marginHorizontal: 10,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#3B434C',
    borderRadius: 30,
    marginTop: 20,
  },
  confirmBtnTxt: {
    fontSize: 16,
    fontWeight: '300',
    color: 'rgba(255,255,255,1)',
  },
});

export default FilterComponent;
