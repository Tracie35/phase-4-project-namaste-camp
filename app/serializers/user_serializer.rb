class UserSerializer < ActiveModel::Serializer
  attributes :id, :name, :age, :password_digest, :email
end
