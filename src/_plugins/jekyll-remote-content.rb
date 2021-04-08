require 'net/http'
require 'uri'
# require 'front_matter_parser'
# require 'yaml'

module Jekyll
  module RemoteContent
    def remote(input)
      string = Net::HTTP.get(URI.parse(input.strip)).force_encoding 'utf-8'
      # parsed = FrontMatterParser::Parser.parse_file(string)
      # parsed = FrontMatterParser::Parser.new(:slim).call(string)
      # parsed.front_matter #=> {'title' => 'Hello World', 'category' => 'Greetings'}
      # parsed.content #=> 'Some actual content'
      # front_matter = YAML.load(string)
      # puts front_matter.inspect
      return string.gsub(/\A---(.|\n)*?---/, '')
    end
  end
end

Liquid::Template.register_filter(Jekyll::RemoteContent)