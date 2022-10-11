class User < ApplicationRecord
    has_many :service
    has_many :activity
end
