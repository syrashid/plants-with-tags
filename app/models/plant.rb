class Plant < ApplicationRecord
  belongs_to :garden # adds a presence validation on the garden_id foreign key

  validates :name, presence: true

  has_many :plant_tags, dependent: :destroy
  has_many :tags, through: :plant_tags
end
