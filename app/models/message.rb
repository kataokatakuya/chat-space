class Message < ApplicationRecord
  belongs_to :group
  belongs_to :user

  mount_uploader :image, ImageUploader

  def date_time
    created_at.in_time_zone('Tokyo').strftime('%Y/%m/%d %H:%M:%S')
  end

end
