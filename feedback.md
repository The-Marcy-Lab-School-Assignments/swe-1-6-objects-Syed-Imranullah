# Feedback for Objects Assignment

## Overall Performance
Good progress! You achieved a score of 3/10, showing you understand the basic concepts. You've successfully completed the first 3 functions, which is a solid foundation.

## What You Did Well

### Successful Functions
- **coolGreeting()**: Perfect implementation with proper conditional logic and string interpolation
- **haveBirthday()**: Correct object mutation using `person.age = person.age + 1`
- **becomeSecretAgent()**: Proper deletion and addition of properties (though it doesn't need to return the person)

### Code Quality
- **Clean syntax**: Your code is well-formatted and readable
- **Proper conditional logic**: You understand how to use if/else statements correctly

## Areas for Improvement

### Functions That Need Implementation
You still need to complete 7 functions. Here are some tips:

#### 4. carMaker(name, maker, year)
- Create a new object with the provided parameters
- Include a `needsOilChange` property set to `false`
- Return the object

#### 5. weAreNotFriends(person)
- Use `person.friends.pop()` to remove the last friend
- Return the value that `pop()` gives you

#### 6. listHobbies(person)
- Use a loop to go through `person.hobbies`
- Use `console.log()` to print each hobby

#### 7. getNextOpponent(team)
- Check if `team.matches` has any items
- Return the `teamName` of the first match
- Return `null` if there are no matches

#### 8. listAllKeys(obj)
- Use `Object.keys(obj)` to get all the keys
- Return the result

#### 9. listAllValues(obj)
- Use `Object.values(obj)` to get all the values
- Return the result

#### 10. convertToMatrix(arr)
- This is the most complex one - start with the others first!

## Small Fix for becomeSecretAgent
Your function works but doesn't need to return the person. You can remove the `return person` line.

## Next Steps
1. Focus on completing the simpler functions first (carMaker, weAreNotFriends, listAllKeys, listAllValues)
2. Test each function as you complete it using `npm test`
3. Don't worry about convertToMatrix until you've completed the others

You're making good progress! Keep going with the remaining functions.
