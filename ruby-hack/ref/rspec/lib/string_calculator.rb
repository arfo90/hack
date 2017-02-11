class StringCalcuator
    def self.add (input)
        return 0 if input.empty?
        input.split(',').map(&:to_i).inject(:+)
        #sum = 0
        #input = input.split(',').map(&:to_i).each {|num| sum+=num} 
    end
end
