import MyComponent from './MyComponent.js'
import withPersistentData from './withPersistentData.js'

const MyComponentWithPersistentData = withPersistentData(MyComponent);
export default MyComponentWithPersistentData;