#!/usr/bin/env ruby
#
# prerequisites
#   npm install -g quicktype

require 'open3'
require __dir__ + '/lib/ts_writer.rb'

index_file = __dir__ + '/../scim-api/v1/index.ts'
File.truncate(index_file, 0)

ts_writer = TsWriter.new


class Target
  attr_reader :json_path, :class_name, :output_path

  def initialize(json_path, class_name, output_path)
    @json_path = json_path
    @class_name = class_name
    @output_path = output_path
  end
end

targets = [
  Target.new(__dir__ + '/../json/scim-api/v1/Groups.json', 'GroupsResponse', __dir__ + "/../scim-api/v1/GroupsResponse.d.ts"),
  Target.new(__dir__ + '/../json/scim-api/v1/Users.json', 'UsersResponse', __dir__ + "/../scim-api/v1/UsersResponse.d.ts"),
  Target.new(__dir__ + '/../json/scim-api/v1/ServiceProviderConfigs.json', 'ServiceProviderConfigsResponse', __dir__ + "/../scim-api/v1/ServiceProviderConfigsResponse.d.ts"),
  Target.new(__dir__ + '/../json/scim-api/v1/Users/000000000.json', 'UserResponse', __dir__ + "/../scim-api/v1/UserResponse.d.ts"),
  Target.new(__dir__ + '/../json/scim-api/v1/Groups/000000000.json', 'GroupResponse', __dir__ + "/../scim-api/v1/GroupResponse.d.ts"),
]
targets.each do |target|
  File.open(target.json_path) do |json_file|
    root_class_name = target.class_name
    typedef_filepath = target.output_path
    input_json = json_file.read
    ts_writer.write(root_class_name, target.json_path, typedef_filepath, input_json)
    ts_writer.append_to_index_ts(root_class_name, index_file)
  end
end
