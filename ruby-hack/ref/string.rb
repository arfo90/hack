text = "hey how is it hanging"
puts text.slice(4, 3)
puts text.include? "how"
puts text.empty?


build_up = ""

material = { k1: "val 1", k2:"val 2"}
material.each {|k,v| build_up << "#{k} has #{v} " }
p build_up
p material.keys.join('')


w_array = ['a', 'b', 'c']

s1 = ''
w_array.each { |x| s1 << x << " and " }
p s1
p w_array.join(' and ')

s_rev = 'this text is reverse'
p s_rev.reverse

p s_rev.reverse!

s_spil = "one two three four"
p s_spil.split(/\b/)
p s_spil.split(/\s+/)



s_spil2 = s_spil.split(/\s+/)
p s_spil2.join(' ')


class String
    def word_count
        frequencies = Hash.new(0)
        downcase.scan(/\w+/) { |word| frequencies[word] += 1 }
        return frequencies
    end
end

s_count = "this is very important thing"
p s_count.word_count


class String
    def word_count
        frequencies = Hash.new(0)
        self.downcase.scan(/(\w+([-'.]\w+)*)/) do |word, ignore|
            frequencies[word] += 1
        end
        return frequencies
    end
end

s_count = "this is ve--ry important thing"
p s_count.word_count


p 'A string'.respond_to? :to_str

('a'..'k').each {|x| p x}
