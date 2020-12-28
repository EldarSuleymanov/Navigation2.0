import React, {Component} from 'react';
import {Text, View, StyleSheet, TouchableOpacity} from 'react-native';

class CalcStack extends Component {
  constructor(props) {
    super(props);
    this.state = {
      primaryScreen: '',
      secondaryScreen: '',
      error: false,
      screenIsEmpty: true,
      dotpressed: false,
      triger: false,
    };
  }

  operationPressed(operation) {
    const {secondaryScreen, primaryScreen} = this.state;
    const lastChar = secondaryScreen.slice(-1);
    if (lastChar === '.') {
      this.setState({
        secondaryScreen:
          secondaryScreen.slice(0, secondaryScreen.length - 1) + operation,
      });
    } else {
      if (!this.state.error) {
        if (secondaryScreen) {
          if (primaryScreen) {
            this.setState({
              primaryScreen: '',
              secondaryScreen: primaryScreen + operation,
            });
          } else {
            if (
              lastChar === '+' ||
              lastChar === '-' ||
              lastChar === '*' ||
              lastChar === '/'
            ) {
              this.setState({
                secondaryScreen:
                  secondaryScreen.slice(0, secondaryScreen.length - 1) +
                  operation,
              });
            } else {
              this.setState({
                secondaryScreen: secondaryScreen + operation,
              });
            }
          }
          this.setState({
            dotpressed: false, //2.5 + 2.3= mojno stavit tochki
            screenIsEmpty: true, //2+.=2+0.
          });
        }
      }
    }
  }

  buttonsPressed(text) {
    if (!this.state.error) {
      if (this.state.secondaryScreen === '0') {
        this.setState({
          screenIsEmpty: false,
          secondaryScreen: text,
        });
      } else {
        this.setState({
          screenIsEmpty: false,
          secondaryScreen: this.state.secondaryScreen + text,
        });
      }
    }
  }

  EqualPressed(text) {
    const {secondaryScreen} = this.state;
    const lastChar = secondaryScreen.slice(-1);
    if (lastChar === '.') {
      this.setState({
        primaryScreen: secondaryScreen.slice(0, secondaryScreen.length - 1),
        secondaryScreen: secondaryScreen.slice(0, secondaryScreen.length - 1),
        dotpressed: false,
      });
    } else {
      const lastChar = secondaryScreen.slice(-1);
      if (
        lastChar !== '+' &&
        lastChar !== '-' &&
        lastChar !== '*' &&
        lastChar !== '/'
      ) {
        if (eval(text) !== Infinity && eval(text) !== -Infinity) {
          this.setState({
            primaryScreen: eval(text),
            // screenIsEmpty: true,
          });
        } else {
          this.setState({
            primaryScreen: 'Error, press C',
            error: true,
          });
        }
      }
    }
  }

  backspacePressed() {
    if (!this.state.error) {
      const {secondaryScreen} = this.state;
      const lastChar = secondaryScreen.slice(-1);
      if (secondaryScreen && lastChar !== '.') {
        this.setState({
          secondaryScreen: secondaryScreen.slice(0, secondaryScreen.length - 1),
        });
      } else if (secondaryScreen && lastChar === '.') {
        this.setState({
          secondaryScreen: secondaryScreen.slice(0, secondaryScreen.length - 1),
          dotpressed: false,
        });
      }
    }
  }

  dotPressed(dot) {
    if (!this.state.error) {
      const {secondaryScreen, screenIsEmpty} = this.state;
      const lastChar = secondaryScreen.slice(-1);
      if (!screenIsEmpty && lastChar !== '.' && !this.state.dotpressed) {
        this.setState({
          secondaryScreen: secondaryScreen + dot,
          dotpressed: true,
        });
      } else if (screenIsEmpty && !this.state.dotpressed) {
        this.setState({
          secondaryScreen: secondaryScreen + '0.',
          screenIsEmpty: false,
          dotpressed: true,
        });
      }
    }
  }

  clean() {
    this.setState({
      secondaryScreen: '',
      primaryScreen: '',
      error: false,
      screenIsEmpty: true,
      dotpressed: false,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View style={styles.secondaryScreenText}>
          <Text style={styles.secondaryScreen}>
            {this.state.secondaryScreen}
          </Text>
        </View>
        <View style={styles.primaryScreenText}>
          <Text style={styles.primaryScreen}>{this.state.primaryScreen}</Text>
        </View>

        <View style={styles.buttons}>
          <View style={styles.numbers}>
            <View style={styles.row}>
              <TouchableOpacity style={styles.btn} onPress={() => this.clean()}>
                <Text style={[{fontSize: 30}, {color: '#1a2466'}]}>C</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.EqualPressed(this.state.secondaryScreen)}>
                <Text style={[{fontSize: 30}, {color: '#1a2466'}]}>=</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('7')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>7</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('8')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>8</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('9')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>9</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('4')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>4</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('5')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>5</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('6')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>6</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('1')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>1</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('2')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>2</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('3')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>3</Text>
              </TouchableOpacity>
            </View>

            <View style={styles.row}>
              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.buttonsPressed('0')}>
                <Text style={[{fontSize: 30}, {color: '#9ca318'}]}>0</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.dotPressed('.')}>
                <Text style={[{fontSize: 30}, {color: '#1a2466'}]}>.</Text>
              </TouchableOpacity>

              <TouchableOpacity
                style={styles.btn}
                onPress={() => this.backspacePressed()}>
                <Text style={[{fontSize: 30}, {color: '#1a2466'}]}>Back</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View style={styles.operations}>
            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.operationPressed('/')}>
              <Text style={[{color: '#a61616'}, {fontSize: 40}]}>/</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.operationPressed('*')}>
              <Text style={[{color: '#a61616'}, {fontSize: 40}]}>*</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.operationPressed('-')}>
              <Text style={[{color: '#a61616'}, {fontSize: 40}]}>-</Text>
            </TouchableOpacity>

            <TouchableOpacity
              style={styles.btn}
              onPress={() => this.operationPressed('+')}>
              <Text style={[{color: '#a61616'}, {fontSize: 40}]}>+</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  secondaryScreen: {
    fontSize: 24,
    color: 'white',
  },
  primaryScreen: {
    fontSize: 30,
    color: 'white',
  },
  row: {
    flexDirection: 'row',
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'center',
  },
  secondaryScreenText: {
    flex: 2,
    backgroundColor: '#29362c',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  primaryScreenText: {
    flex: 1,
    backgroundColor: '#0c170f',
    justifyContent: 'center',
    alignItems: 'flex-end',
  },
  buttons: {
    flex: 7,
    flexDirection: 'row',
  },
  numbers: {
    flex: 3,
    backgroundColor: '#156b2d',
  },
  operations: {
    flex: 1,
    justifyContent: 'space-around',
    alignItems: 'stretch',
    backgroundColor: '#2c5236',
  },
  btn: {
    flex: 1,
    fontSize: 50,
    alignItems: 'center',
    alignSelf: 'stretch',
    justifyContent: 'center',
  },
});

export default CalcStack;
