class Api::V1::ListTodayController < ApplicationController
    def index
        list = Food.find(Food.pluck(:id).shuffle[0..4])
        render json: { status: 'SUCCESS', message: 'Loaded list', title: "오늘 추천", data: list }
    end
end
