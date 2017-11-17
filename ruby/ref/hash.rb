# selecting part of the hash
# click_counts = { "1" => "100", "2" => "50", "3" => "800" }
# low_click_days = click_counts.select {|key, value| value < 500 }
#   
#   or
#
# low_click_days_hash = click_counts.inject({}) do |h, kv|
#   k, v = kv
#   h[k] = v if v < 450
#   h
# end
