class User < ApplicationRecord
    has_many :service
    has_many :activity

    #validation
    validates :name, presence: true
    validates :email, uniqueness: true
    validates :password, length: { in: 6..20 }
    validates :age, :inclusion => 18..35
end
