module Jekyll
    module TwitterFilter
        def twitterify(text)
            text.gsub(/@(\w+)/, '<a href="https://twitter.com/\1">@\1</a>')
        end
    end
end
  
Liquid::Template.register_filter(Jekyll::TwitterFilter)
