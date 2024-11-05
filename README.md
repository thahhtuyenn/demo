
# Tuần 09

Implemention Todo App with redux-toolkit, redux-saga, recoil


## Installation

Clone project

```bash
  git clone https://github.com/LeDonChung/LeDonChung_21023861_Tuan09
```

Start project with npm

```bash
  npm start
```

## Redux Tookit
Replace AppNavigation.js

```bash
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="screen1" component={Screen_01} />
        {/* Screen for Redux Toolkit */}
      <Stack.Screen name="screen2" component={Screen_02_Toolkit} />
      <Stack.Screen name="screen3" component={Screen_03_Toolkit} />        
    </Stack.Navigator>
</NavigationContainer>
```

Replace App.js
```bash
  <>
      <AuthProvider>
          {/* Redux Toolkit */}
          <Provider store={store}>
              <AppNavigation />
          </Provider>
      </AuthProvider>
</>
```
## Redux Saga
Replace AppNavigation.js

```bash
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="screen1" component={Screen_01} />
        {/* Screen for Redux Saga */}
      <Stack.Screen name="screen2" component={Screen_02_Saga} />
      <Stack.Screen name="screen3" component={Screen_03_Saga} />        
    </Stack.Navigator>
</NavigationContainer>
```

Replace App.js
```bash
  <>
      <AuthProvider>
          {/* Redux Saga */}
          <Provider store={Store}>
              <AppNavigation />
          </Provider>
      </AuthProvider>
</>
```

## Recoil
Replace AppNavigation.js

```bash
<NavigationContainer>
    <Stack.Navigator screenOptions={{headerShown: false}}>
      <Stack.Screen name="screen1" component={Screen_01} />
        {/* Screen for Recoil */}
      <Stack.Screen name="screen2" component={Screen_02_Recoil} />
      <Stack.Screen name="screen3" component={Screen_03_Recoil} />        
    </Stack.Navigator>
</NavigationContainer>
```

Replace App.js
```bash
  <>
      <AuthProvider>
          {/* Recoil */}
          <RecoilRoot>
              <AppNavigation />
          </RecoilRoot>
      </AuthProvider>
</>
```

## API
```bash
  https://6457b5721a4c152cf98861de.mockapi.io/api/ck/todos
```
## Demo

![Demo](https://github.com/LeDonChung/ReactNative/blob/main/Tuan06/Tuan06_Frontend/assets/evidences/demo.gif)

Hoặc nhấn vào đây để xem video: [View Video](https://youtu.be/nXncRd-rcq0)
