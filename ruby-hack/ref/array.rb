# [1,2,3,4,5].each { |e| puts e }
new_array = [1,2,3,4,5].collect { |e| e * 2 }
p new_array

[1,2,3,4].each_with_index do |item, index|
    # puts "the index is #{index} and the item is #{item}"
end

p ['a','b','c'].map { |e| e.upcase}

arr = [[2,2], [90], [1,1,1]]
p arr.sort_by { |x| x.size }


p ["a", "bnb", "ghgh"].any? { |x| x.include? "a" }


collection = [['1', 'one'], ['2', 'two'], ['3', 'three']]

collection = collection.inject({}) do |hash, value|
    hash[value.first] = value.last
    hash
end
p collection
