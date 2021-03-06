#!/usr/bin/env ruby
#
# prerequisites
#   npm install -g quicktype

require 'open3'
require __dir__ + '/lib/ts_writer.rb'

# dialogs
index_file = __dir__ + '/../app-backend/dialogs/index.ts'
File.truncate(index_file, 0)

ts_writer = TsWriter.new

Dir.glob(__dir__ + '/../json/app-backend/dialogs/*').sort.each do |json_path|
  File.open(json_path) do |json_file|
    filename = json_path.split('/').last.gsub(/\.json$/, '')
    root_class_name = filename
    typedef_filepath = __dir__ + "/../app-backend/dialogs/#{root_class_name}.d.ts"
    input_json = json_file.read
    ts_writer.write(root_class_name, json_path, typedef_filepath, input_json)
    ts_writer.append_to_index_ts(root_class_name, index_file)
  end
end

# interactive messages
index_file = __dir__ + '/../app-backend/interactive-components/index.ts'
File.truncate(index_file, 0)

ts_writer = TsWriter.new

Dir.glob(__dir__ + '/../json/app-backend/interactive-components/*').sort.each do |json_path|
  File.open(json_path) do |json_file|
    filename = json_path.split('/').last.gsub(/\.json$/, '')
    root_class_name = filename
    typedef_filepath = __dir__ + "/../app-backend/interactive-components/#{root_class_name}.d.ts"
    input_json = json_file.read
    ts_writer.write(root_class_name, json_path, typedef_filepath, input_json)
    ts_writer.append_to_index_ts(root_class_name, index_file)
  end
end

# slash commands
index_file = __dir__ + '/../app-backend/slash-commands/index.ts'
File.truncate(index_file, 0)

ts_writer = TsWriter.new

Dir.glob(__dir__ + '/../json/app-backend/slash-commands/*').sort.each do |json_path|
  File.open(json_path) do |json_file|
    filename = json_path.split('/').last.gsub(/\.json$/, '')
    root_class_name = filename
    typedef_filepath = __dir__ + "/../app-backend/slash-commands/#{root_class_name}.d.ts"
    input_json = json_file.read
    ts_writer.write(root_class_name, json_path, typedef_filepath, input_json)
    ts_writer.append_to_index_ts(root_class_name, index_file)
  end
end

# views
index_file = __dir__ + '/../app-backend/views/index.ts'
File.truncate(index_file, 0)

ts_writer = TsWriter.new

Dir.glob(__dir__ + '/../json/app-backend/views/*').sort.each do |json_path|
  File.open(json_path) do |json_file|
    filename = json_path.split('/').last.gsub(/\.json$/, '')
    root_class_name = filename
    typedef_filepath = __dir__ + "/../app-backend/views/#{root_class_name}.d.ts"
    input_json = json_file.read
    ts_writer.write(root_class_name, json_path, typedef_filepath, input_json)
    ts_writer.append_to_index_ts(root_class_name, index_file)
  end
end
