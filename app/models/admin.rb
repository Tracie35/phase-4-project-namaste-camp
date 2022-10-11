class Admin < ApplicationRecord
    has_many activities, through: :users
    has_many services, through: :users

    #validations
    validates :name, presence: true
    validates :email, uniqueness: true
    validates :password_digest, length: { in: 6..20 }

end
