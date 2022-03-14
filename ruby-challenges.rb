# ASSESSMENT 4: Ruby Coding Practical Questions
# MINASWAN

# --------------------1) Create a method that takes in a number and determines if the number is even or odd. Use the test variables provided.

# I have two code because I used a JS approach to it. I found a method that was already built in for ruby and wanted to use it as well.
num1 = 7
# Expected output: '7 is odd'
num2 = 42
# Expected output: '42 is even'
num3 = 221
# Expected output: '221 is odd'
# def odd_number(number)
#     if number % 2 == 0
#       "#{number} is even"
#     else "#{number} is odd"
#   end
# end

def odd_number(number)
    if number.even? == true
      "#{number} is even"
    else "#{number} is odd"
  end
end
p odd_number(num1)
p odd_number(num2)
p odd_number(num3)

# -------------------2) Create a method that takes in a string and removes all the vowels from the string. Use the test variables provided. HINT: Check out this resource: https://ruby-doc.org/core-2.6/String.html#method-i-delete

album1 = 'Rubber Soul'
# Expected output: 'Rbbr Sl'
album2 = 'Sgt Pepper'
# Expected output: 'Sgt Pppr'
album3 = 'Abbey Road'
# Expected output: 'bby Rd'
def vowel_taker(string)
string.delete 'AEIOUaeiou'
end

p vowel_taker(album1)
p vowel_taker(album2)
p vowel_taker(album3)

# -------------------3) Create a method that takes in a string and checks if the string is a palindrome. A palindrome is the same word spelled forwards or backwards. Use the test variables provided.

is_palindrome1 = 'Racecar'
# Expected output: 'Racecar is a palindrome'
is_palindrome2 = 'LEARN'
# Expected output: 'LEARN is not a palindrome'
is_palindrome3 = 'Rotator'
# Expected output: 'Rotator is a palindrome'

def pali_yes_no(string)
   good = string.downcase
  if good == good.reverse
    "#{string} is a palindrome"
  else
    "#{string} is not palindrome"
  end
end
# haha this one was a little tricky but i got it!! WOOP WOOP
p pali_yes_no(is_palindrome1)
p pali_yes_no(is_palindrome2)
p pali_yes_no(is_palindrome3)
