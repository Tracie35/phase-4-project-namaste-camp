class AdminSerializer < ActiveModel::Serializer
  attributes :id, :name, :pasword_digest, :email
end
